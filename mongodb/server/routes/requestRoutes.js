const express = require('express');
const Request = require('../models/Request');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const router = express.Router();

// Create a new seed request
router.post('/request', async (req, res) => {
    const { requesterId, requesterEmail, seedId, seedOwnerEmail } = req.body;

    if (!requesterId || !requesterEmail || !seedId || !seedOwnerEmail) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const newRequest = new Request({
            requesterId,
            requesterEmail,
            seedId,
            seedOwnerEmail,
        });

        await newRequest.save();
        res.status(201).json({ message: 'Request created successfully', request: newRequest });
    } catch (error) {
        console.error('Error creating request:', error);
        res.status(500).json({ error: 'Failed to create request' });
    }
});

// Fetch all requests for the seeds owned by the user
router.get('/owner/:email', async (req, res) => {
    const { email } = req.params;
    console.log(email);

    try {
        // Find requests where the associated seed's createdByEmail matches the provided email
        const requests = await Request.find()
            .populate({
                path: 'seedId', // Populate the seedId in the Request collection
                match: { createdByEmail: email }, // Filter to only those seeds created by the specified user
                select: 'seedName seedType image description createdByEmail createdAt', // Select only the fields you need
            })
            .populate({
                path: 'requesterId', // Populate the requesterId in the Request collection
                select: 'email', // Select only the email field from the requester
            });

        // Filter out requests that don't have a valid seedId (not created by the user)
        const filteredRequests = requests.filter(request => request.seedId !== null);

        res.status(200).json(filteredRequests);
    } catch (error) {
        console.error('Error fetching requests:', error);
        res.status(500).json({ error: 'Failed to fetch requests' });
    }
});


// Update request status (Grant or Decline)
router.put('/update/:id', async (req, res) => {
    const { status } = req.body;
    const { id } = req.params;

    try {
        const request = await Request.findByIdAndUpdate(id, { status }, { new: true });

        // If the request is granted, send an email notification
        if (status === 'Granted') {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: request.requesterEmail,
                subject: 'Seed Request Granted',
                text: `Your request for the seed has been granted! Request ID: ${request._id}`
            };

            await transporter.sendMail(mailOptions);
        }

        res.status(200).json({ message: 'Request updated', request });
    } catch (error) {
        console.error('Error updating request:', error);
        res.status(500).json({ error: 'Failed to update request' });
    }
});

module.exports = router;

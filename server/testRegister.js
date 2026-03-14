import axios from 'axios';

async function testRegistration() {
    try {
        const payload = {
            walletAddress: '0x1234567890123456789012345678901234567890',
            name: 'Test User',
            email: 'test' + Date.now() + '@example.com',
            voterId: 'VOTER' + Date.now(),
            faceDescriptor: Array.from({length: 128}, () => Math.random())
        };

        console.log("Sending payload...");
        const res = await axios.post('http://localhost:5000/api/auth/register', payload);
        console.log("Response:", res.data);
    } catch (error) {
        if (error.response) {
            console.error("Error Status:", error.response.status);
            console.error("Error Data:", error.response.data);
            console.error("Error Message field:", error.response.data.message);
        } else {
            console.error("No response object:", error.message);
        }
    }
}

testRegistration();

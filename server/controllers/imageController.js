import userModel from "../models/userModel.js";
import axios from 'axios';
import FormData from 'form-data';

export const generateImage = async (req, res) => {
  try {
    const { userId, prompt } = req.body;

    // Fetch user from the database
    const user = await userModel.findById(userId);
    if (!user || !prompt) {
      return res.json({ success: false, message: 'Missing Details' });
    }

    // Check credit balance
    if (user.creditBalance <= 0) {
      return res.json({ success: false, message: 'No Credit Balance', creditBalance: user.creditBalance });
    }

    // Create FormData object
    const formData = new FormData();
    formData.append('prompt', prompt);

    // Make API request
    const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
      headers: {
        ...formData.getHeaders(), // Include FormData headers
        'x-api-key': process.env.CLIPDROP_API,
      },
      responseType: 'arraybuffer', // To handle image data
    });

    // Convert response to base64 format
    const base64Image = Buffer.from(data, 'binary').toString('base64');
    const resultImage = `data:image/png;base64,${base64Image}`;

    // Update user's credit balance
    await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 });

    // Send response
    res.json({
      success: true,
      message: "Image Generated",
      creditBalance: user.creditBalance - 1,
      resultImage,
    });

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

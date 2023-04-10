import Ads from "../Models/Ads.js";

// get all ads
export const getAds = async (req, res) => {
  try {
    const ads = await Ads.find();
    if (!ads) {
      res.status(404).json({ success: false, message: "Ads not found" });
    }
    res.status(200).json({
      success: true,
      counts : ads.length,
      message: "Successfully fetched all ads",
      ads: ads,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
};

// get single ad
export const getSingleAd= async (req, res) => {
  const { id } = req.params;
  try {
    const ad = await Ads.findById(id);
    if (!ad) {
      res.status(404).json({ success: false, message: "Ad not found" });
    }
    res.status(200).json({
      success: true,
      message: "Successful",
      ad: ad,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
};

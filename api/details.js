const PastPapersScraper = require('../scraper');

module.exports = async (req, res) => {
    const url = req.query.url;
    if (!url) return res.status(400).json({ error: 'URL required' });

    try {
        const scraper = new PastPapersScraper();
        const details = await scraper.getPaperDetails(url);
        res.status(200).json(details);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

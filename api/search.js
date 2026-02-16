const PastPapersScraper = require('../scraper');

module.exports = async (req, res) => {
    const query = req.query.q;
    const page = req.query.page || 1;
    if (!query) return res.status(400).json({ error: 'Query required' });

    try {
        const scraper = new PastPapersScraper();
        const results = await scraper.searchPapers(query, page);
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

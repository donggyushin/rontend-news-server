export const testPost = (req, res) => {
    const { test } = req.body;
    res.json({
        ok: true,
        result: test
    })
}
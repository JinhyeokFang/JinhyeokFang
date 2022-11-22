import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createSite, getSite } from '../../database/actions';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method == 'GET')
        GET(req, res);
    else if (req.method == 'POST')
        POST(req, res);
    else
        res.status(404).send({ success: false });
}

async function GET(req: VercelRequest, res: VercelResponse) {
    const name = req.query.name as string;

    if (name === undefined) {
        res.status(400).json({
            success: false,
            error: `this api requires query variable named 'name'.`,
        })
    }

    try {
        const siteQueryResult = await getSite(name);
        const site = siteQueryResult.Item ? siteQueryResult.Item : null;
        res.json({
            success: true,
            site,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error,
        });
    }
}

async function POST(req: VercelRequest, res: VercelResponse) {
    const { siteName, url } = req.body;
    try {
        await createSite(siteName, url);
        res.json({
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error,
        });
    }
}

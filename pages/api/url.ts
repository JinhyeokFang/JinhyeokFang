import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createSite, getSite } from '../../database/actions';

export async function GET(req: VercelRequest, res: VercelResponse) {
    const name = req.query.name as string;
    try {
        const siteQueryResult = await getSite(name);
        const site = siteQueryResult.Item ? siteQueryResult.Item : null;
        res.json({
            success: true,
            site,
        });
    } catch (error) {
        res.json({
            success: false,
            error,
        });
    }
}

export async function POST(req: VercelRequest, res: VercelResponse) {
    const { siteName, url } = req.body;
    try {
        await createSite(siteName, url);
        res.json({
            success: true,
        });
    } catch (error) {
        res.json({
            success: false,
            error,
        });
    }
}

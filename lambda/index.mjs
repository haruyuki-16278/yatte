/**
 * @type {import("aws-lambda").APIGatewayProxyHandler}
 * @type {import("aws-lambda").APIGatewayProxyEvent}
 * @type {import("aws-lambda").APIGatewayProxyResult}
 * @type {import("aws-lambda").Context}
 */

import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

/**
 * @type {APIGatewayProxyHandler}
 * @param {APIGatewayProxyEvent} event
 * @param {Context} _context
 * @returns {Promise<APIGatewayProxyResult>}
 */
export const handler = async (event, _context) => {
  const ua = event.headers["User-Agent"];

  // クライアントがcurlかwgetでなければgitリポジトリにリダイレクト
  if (!ua?.includes("curl") && !ua?.includes("wget")) {
    return {
      statusCode: 301,
      headers: {
        Location: "https://github.com/haruyuki-16278/yatte",
      },
    };
  }

  const s3Client = new S3Client({
    region: "ap-northeast-3",
  });

  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: process.env.BUCKET_KEY,
  };
  const expiresIn = 300;

    const presignedUrl = await getSignedUrl(
      s3Client,
      new GetObjectCommand(params),
      { expiresIn }
    );

    return {
      statusCode: 301,
      headers: {
        Location: presignedUrl,
      },
      body: "",
    };

};

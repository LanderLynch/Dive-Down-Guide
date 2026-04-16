const basePath = (process.env.PUBLIC_URL || "").replace(/\/$/, "");

export const getPublicAssetPath = (assetPath) => {
  const normalizedPath = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${basePath}${normalizedPath}`;
};

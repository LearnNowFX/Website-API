export const extractVideoIdsFromYouTubeHTML = (html: string) => {
  // Define a regular expression to match "videoId" keys and their associated values
  const regex = /"videoId"\s*:\s*"([^"]+)"/g;

  // Initialize an array to store the unique video IDs
  const uniqueVideoIds: string[] = [];

  // Loop through all matches in the HTML using the regular expression
  let match;
  while ((match = regex.exec(html)) !== null) {
    // Extract the video ID from the match and add it to the array if not already present
    const videoId = match[1];

    if (!uniqueVideoIds.includes(videoId)) {
      uniqueVideoIds.push(videoId);
    }
  }

  return uniqueVideoIds;
};

export const extractVideoITitleFromYouTubeHTML = (html: string) => {
  // Define a regular expression to match "videoId" keys and their associated values
  const regex = /<title>([^<]+)<\/title>/g;

  // Initialize an array to store the unique video IDs
  let title = "";

  // Loop through all matches in the HTML using the regular expression
  let match;

  if ((match = regex.exec(html)) !== null) {
    // Extract the video ID from the match and add it to the array if not already present
    title = match[1];
  }

  return title;
};

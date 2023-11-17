

const PostContactInfo = async ({ dataToPost }) => 
{
  try 
  {
    const response = await fetch(
      `https://portfolio-web3350-default-rtdb.firebaseio.com/contacts.json`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToPost),
      }
    );

    if (!response.ok) 
    {
        console.log("PostContactInfo FAILED to post data to database...");
        return false;
    }
    else
    {
        console.log("PostContactInfo successful...", response);
        return true;
    }

  } catch (error) 
  {
    console.error("PostContactInfo failed:", error);
    return false;
  }
};

export default PostContactInfo;
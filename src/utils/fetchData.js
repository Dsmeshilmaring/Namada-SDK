const fetchWallet = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Something went wrong to fetching the data", res.status);
    }

    const data = await res.json();

    return data;
  } catch (err) {
    return err;
  }
};

export default fetchWallet;

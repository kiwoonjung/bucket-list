import { useState, useEffect } from "react";

import BucketList from "../components/bucketlists/BucketList";

function AllBucketListsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBucketLists, setBucketLists] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://bucket-list-cc849-default-rtdb.firebaseio.com/bucketlists.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const bucketlists = [];

        for (const key in data) {
          const bucketlist = {
            id: key,
            ...data[key],
          };

          bucketlists.push(bucketlist);
        }

        setIsLoading(false);
        setBucketLists(bucketlists);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Bucket Lists</h1>
      <BucketList bucketlists={loadedBucketLists} />
    </section>
  );
}

export default AllBucketListsPage;

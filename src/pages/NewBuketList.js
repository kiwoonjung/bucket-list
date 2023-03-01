import { useHistory } from "react-router-dom";

import NewBucketListForm from "../components/bucketlists/NewBucketListForm";

function NewBucketListPage() {
  const history = useHistory();

  function addBucketListHandler(bucketListData) {
    fetch(
      "https://bucket-list-cc849-default-rtdb.firebaseio.com/bucketlists.json",
      {
        method: "POST",
        body: JSON.stringify(bucketListData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New BucketList</h1>
      <NewBucketListForm onAddBucketList={addBucketListHandler} />
    </section>
  );
}

export default NewBucketListPage;

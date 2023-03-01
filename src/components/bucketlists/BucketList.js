import BucketListItem from "./BucketListItem";
import classes from "./BucketList.module.css";

function BucketList(props) {
  return (
    <ul className={classes.list}>
      {props.bucketlists.map((bucketlist) => (
        <BucketListItem
          key={bucketlist.id}
          id={bucketlist.id}
          image={bucketlist.image}
          title={bucketlist.title}
          address={bucketlist.address}
          description={bucketlist.description}
        />
      ))}
    </ul>
  );
}

export default BucketList;

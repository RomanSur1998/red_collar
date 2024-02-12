export function getDescriptinLine(
  description,
  isShowFullDescr,
  setIsShowFullDescr
) {
  if (description?.length > 20 && !isShowFullDescr) {
    return (
      <p className={styles.description}>
        {`${description.slice(0, 30)}... `}{" "}
        <button
          className={styles.moreButton}
          onClick={() => {
            setIsShowFullDescr(true);
          }}
        >
          Read more
        </button>
      </p>
    );
  } else {
    return description;
  }
}

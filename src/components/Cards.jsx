export default function Cards({ picArray, handleClick }) {
  if (picArray[0] != undefined) {
    return picArray.map((pic) => (
      <article
        data-key={pic.id}
        className="card"
        key={pic.id}
        onClick={handleClick}
      >
        <img src={pic.urls.small} alt={pic["alt_description"]} />
      </article>
    ));
  }
}

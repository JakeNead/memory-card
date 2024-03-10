export default function Cards({ picArray }) {
  if (picArray[0] != undefined) {
    return picArray.map((pic) => (
      <article className="card" key={pic.id}>
        <img src={pic.urls.small} alt={pic["alt_description"]} />
      </article>
    ));
  }
}

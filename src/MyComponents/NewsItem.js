const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div className="my-3 h-100 w-100">
      <div className="card h-100 d-flex flex-column">

        <div style={{ position: "absolute", right: "0", zIndex: "1" }}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>

        <img
          src={
            !imageUrl
              ? "https://cdn.mlbtraderumors.com/files/2026/01/USATSI_27090081-1024x728.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="news"
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>

          <p className="card-text mt-auto">
            <small className="text-body-secondary">
              By {author ? author : "Unknown"} on{" "}
              {date ? new Date(date).toGMTString() : "Unknown date"}
            </small>
          </p>

          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark mt-2 read-more-btn"

          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

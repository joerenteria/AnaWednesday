import { useState, useEffect } from "react";
import { useHistory } from "react-router";

function NewPage({ user }) {
  
  const [directory, setDirectory] = useState("");

  const [title1, setTitle1] = useState("");
  const [image1, setImage1] = useState("");
  const [comment1, setComment1] = useState("");

  const [title2, setTitle2] = useState("");
  const [image2, setImage2] = useState("");
  const [comment2, setComment2] = useState("");

  const [title3, setTitle3] = useState("");
  const [image3, setImage3] = useState("");
  const [comment3, setComment3] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/pages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        directory,

        title1,
        comment1,
        image1,

        title2,
        comment2,
        image2,

        title3,
        comment3,
        image3,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/account");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="page1">
        <h2>create page</h2>
        <form className="form1" onSubmit={handleSubmit}>

            <label htmlFor="directory">page name</label>
            <input
              type="text"
              id="directory"
              value={directory}
              onChange={(e) => setDirectory(e.target.value)}
            />





            <label htmlFor="title1">title</label>
            <input
              type="text"
              id="title1"
              value={title1}
              onChange={(e) => setTitle1(e.target.value)}
            />
            <label htmlFor="image">image url</label>
            <input
              type="text"
              id="image1"
              value={image1}
              onChange={(e) => setImage1(e.target.value)}
            />
            <img className="imageform" src={image1}/>
            <label htmlFor="comment">text</label>
            <textarea
              id="comment1"
              rows="10"
              value={comment1}
              onChange={(e) => setComment1(e.target.value)}
            />




            <label htmlFor="title2">title</label>
            <input
              type="text"
              id="title2"
              value={title2}
              onChange={(e) => setTitle2(e.target.value)}
            />
          <label htmlFor="image">image url</label>
            <input
              type="text"
              id="image2"
              value={image2}
              onChange={(e) => setImage2(e.target.value)}
            />
            <img className="imageform" src={image2}/>
            <label htmlFor="comment">text</label>
            <textarea
              id="comment2"
              rows="10"
              value={comment2}
              onChange={(e) => setComment2(e.target.value)}
            />





            <label htmlFor="title3">title</label>
            <input
              type="text"
              id="title3"
              value={title3}
              onChange={(e) => setTitle3(e.target.value)}
            />
            <label htmlFor="image3">image url</label>
            <input
              type="text"
              id="image3"
              value={image3}
              onChange={(e) => setImage3(e.target.value)}
            />
            <img className="imageform" src={image3}/>
            <label htmlFor="comment">text</label>
            <textarea
              id="comment3"
              rows="10"
              value={comment3}
              onChange={(e) => setComment3(e.target.value)}
            />







            <button className="link1" type="submit">
              {isLoading ? "Loading..." : "create page"}
            </button>

            {errors.map((err) => (
             <div className="error" key={err}>{err}</div>
            ))}
          
        </form>
        </div>
  );
}

export default NewPage;

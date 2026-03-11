/* Can't import axios on frontend module 
so instead import it directly on the html file
check that file (it has script axios) */

/* This shows how to do it with HTML instead of EJS
   Insert as script in index.html */
const getData = async () => {
  const URL = "https://api.adviceslip.com/advice";
  const { data } = await axios.get(URL);
  let advice = data.slip.advice;
  console.log(advice)
  let doc = document.getElementById("advice");
  doc.textContent = advice;
};

/* Don't forget to actually run the function */
getData();

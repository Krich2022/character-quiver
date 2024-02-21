import Transition from "../components/ui/Transition";
export default function CreateCharacter() {
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://www.dnd5eapi.co/api/backgrounds", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  return (
    <>
      <Transition />
    </>
  );
}

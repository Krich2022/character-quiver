import Transition from "../components/ui/Transition";
export default function CreateCharacter() {
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  const options = [
    {
      title: "Character Details",
      select: ["race", "class", "background", "alignment"],
      numberInputs: ["Hit Points", "STR", "DEX", "CON", "WIS", "INT", "CHA"],
    },
    {
      title: "Features & Traits",
      select: ["race", "class", "background", "alignment"],
    },
    {
      title: "Equipment",
      select: ["race", "class", "background", "alignment"],
    },
    {
      title: "Character Background",
      select: ["race", "class", "background", "alignment"],
    },
  ];

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
      {options.map((option, index) => (
        <Transition {...option} />
      ))}
    </>
  );
}

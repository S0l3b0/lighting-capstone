const name = "";
const job = "";
const blurb = "";

function profile() {
    return (
      <div class ="profile_crd">
        <h3>{name}, {job}</h3>
        <p>{blurb}</p>
      </div>
    );
};
export default profile;
function Profile({name, job, blurb}) {
    return (
      <div class ="profile_crd">
        <h3>{name}, {job}</h3>
        <p>{blurb}</p>
      </div>
    );
};
export default Profile;
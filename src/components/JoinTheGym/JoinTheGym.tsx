import Button from "../Button/Button";
import "./JoinTheGym.sass";

const JoinTheGym = () => {
  return (
    <div className="containerJoinTheGym">
      <section className="text">
        <h2>Join the Gymnastic family</h2>
        <p>
          Gym session or brisk walk can help. Physucal activity stimulates many
          brain chemicals that may leave you.
        </p>
        <Button>Be a Member</Button>
      </section>
      <section className="img">
        <div className="imgInstructor"></div>
      </section>
    </div>
  );
};

export default JoinTheGym;

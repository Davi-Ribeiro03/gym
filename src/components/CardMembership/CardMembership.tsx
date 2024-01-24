import "./CardMembership.sass";
import MembershipValues from "../MembershipValues/MembershipValues";

const membershipPlans = [
  { name: "Basic", value: 20, benefitsReleased: 3 },
  { name: "Standart", value: 35, benefitsReleased: 4 },
  { name: "Professional", value: 65, benefitsReleased: 5 },
  { name: "Family", value: 65, benefitsReleased: 6 },
];

const CardMembership = () => {
  return (
    <div className="cardMembership">
      <h2>Membership</h2>
      <p>
        Gym session walk can help. Physical activy simulates many brain
        chemicals that may leave you.
      </p>

      <div className="plans">
        {membershipPlans.map((plan) => (
          <MembershipValues
            key={plan.benefitsReleased}
            name={plan.name}
            value={plan.value}
            benefitsReleaseds={plan.benefitsReleased}
          />
        ))}
      </div>
    </div>
  );
};

export default CardMembership;

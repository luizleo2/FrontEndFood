import { Container } from "./styles";

export function Input({ label, id, icon: Icon, className, ...rest }) {
  return (
    <Container className={className}>
      {label && <label htmlFor={id}>{label}</label>}
      <div className="input-wrap">
        {Icon && <Icon size={24} />}
        <input id={id} minLength={1} required {...rest} />
      </div>
    </Container>
  );
}

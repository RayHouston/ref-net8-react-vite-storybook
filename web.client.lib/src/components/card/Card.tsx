type CardProps = {
    title: string;
    description: string;
  };
  
  export const Card = ({ title, description }: CardProps) => {
    return (
      <div>
        <div>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  };
  
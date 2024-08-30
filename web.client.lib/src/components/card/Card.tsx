import { Button } from "@mui/material";

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
            <Button variant="contained">Hello Button</Button>
          </div>
        </div>
      </div>
    );
  };
  
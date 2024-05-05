import {
  StyledWhatIDoCardDescription,
  StyledWhatIDoCardTitle,
  StyledWhatIDoCard,
} from "../styled/StyledWhatIDo";

interface WhatIDoCardProps {
  title: string;
  description: string;
}

const WhatIDoCard: React.FC<WhatIDoCardProps> = ({ title, description }) => {
  return (
    <StyledWhatIDoCard>
      <StyledWhatIDoCardTitle>{title}</StyledWhatIDoCardTitle>
      <StyledWhatIDoCardDescription>{description}</StyledWhatIDoCardDescription>
    </StyledWhatIDoCard>
  );
};

export default WhatIDoCard;

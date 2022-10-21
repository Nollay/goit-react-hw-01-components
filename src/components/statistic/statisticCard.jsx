import PropTypes from 'prop-types';
import { StatInfo } from './statInfo';
import { Title, Section, Container, List } from './statistic.styled';

export const StatisticCard = ({ title, stats }) => {
  return (
    <Container>
      <Section>
        {title && <Title>{title}</Title>}
        <List>
          {stats.map(statInfo => (
            <li key={statInfo.id}>
              <StatInfo statInfo={statInfo} />
            </li>
          ))}
        </List>
      </Section>
    </Container>
  );
};

StatisticCard.prototype = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

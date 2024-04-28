import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To Farmeasy',
  description: 'Harvesting Health, Cultivating Community: Where Freshness Fuels Wellness from Farm to Table',
  keywords: 'vegetables , Fruits , Farmers ',
};

export default Meta;

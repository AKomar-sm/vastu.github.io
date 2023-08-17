import React from 'react';

import { ServiceItem } from './ServiceItem';

import family from 'assets/images/family.jpg';

import './service_section_big_screen.scss';
import './service_section_tablet.scss';
import './service_section_mobile.scss';
import { TODO_TYPE } from 'types';

const servicesContent = [
  {
    header: 'Диагностика и коррекция пространства',
    text: 'Пространство, в котором мы проводим значительную часть нашей жизни, оказывает влияние на сознание, здоровье, достаток и отношения с людьми. К сожалению, большинство квартир и домов проектируются исходя из экономической целесообразности, а не потребностей гармоничного развития человека. Диагностика позволяет понять, как это влияет на хозяев, а последующая работа по коррекции пространства, меняет ситуацию к лучшему.',
    id: 1,
  },
  {
    header: 'Проектирование',
    text: 'Создание Васту – проектов всегда индивидуально, как пошив костюма на заказ. В таком проекте рассчитываются не только физические параметры, но и тонкий план. Дом, спроектированный и построенный по - Васту, позволит быстрее и полнее реализовать заложенный в каждом потенциал и проявить свои лучшие качества. Материальное процветание, хорошее самочувствие, душевное спокойствие и духовный рост – все это закладывается в проект будущего дома.',
    id: 2,
  },
  {
    header: 'Консультация',
    text: 'Обратившись к нам перед покупкой или арендой квартиры, дома, участка для строительства, вы сможете узнать насколько благоприятно ваше будущее место жительства с точки зрения Васту. Попадая в пространство квартиры, офиса или дома, мы вступаем с ним в энергетический обмен, поэтому в одном месте нам приятно находиться, а из другого хочется поскорее уйти. Так мы ощущаем вибрацию помещения, которая может не совпадать, с нашей личной вибрацией, или вообще может быть непригодна для жилья. Консультация поможет сделать правильный выбор, чтобы ваш будущий дом, стал вашим помощником.',
    id: 3,
  },
];

export const ServicesSection = ({ scrollIntoBottom }: TODO_TYPE): JSX.Element => {
  return (
    <div className="servicesWrapper">
      <h2>УСЛУГИ</h2>
      <img src={family} alt="" width="100%" className="familyImage" />
      <div className="itemsWrapper">
        {servicesContent.map((data) => (
          <ServiceItem key={data.id} {...data} {...{ scrollIntoBottom }} />
        ))}
      </div>
    </div>
  );
};

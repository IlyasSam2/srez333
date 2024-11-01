import Accordion from 'react-bootstrap/Accordion';

export function FlushExample() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Факт #1</Accordion.Header>
        <Accordion.Body>
        Обоняние у крыс острее, чем у любых других грызунов. 
        У взрослой крысы в носу около 100 тысяч рецепторов, которые позволяют 
        ей чувствовать ядовитые вещества в куске пищи, даже если яда в еде лишь около 0,001%.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Факт #2</Accordion.Header>
        <Accordion.Body>
        Давным-давно вымершие грызуны вида Josephoartigasia monesi 
        были самыми крупными из всех когда-либо существовавших на Земле. 
        Они вырастали до трёх метров в длину и достигали полутора метров в высоту в холке, 
        а внешне напоминали капибар, которые ныне обитают в Южной Америке.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
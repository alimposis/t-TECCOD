import type { Service } from "./shared/types";

import SelectedList from "./components/SelectedList";

import { useState, useCallback, useMemo } from "react";

import { MOCK_SERVICES } from "./data/mockServices";

export default function App() {
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);

  const addService = useCallback((service: Service) => {
    setSelectedServices((prev) =>
      prev.some((s) => s.id === service.id) ? prev : [...prev, service]
    );
  }, []);

  const totalPrice = useMemo(
    () => selectedServices.reduce((sum, service) => sum + service.price, 0),
    [selectedServices]
  );

  return (
    <div className="container">
      <h1 className="title">Дополнительные услуги</h1>

      <div className="services">
        {MOCK_SERVICES.map((service) => (
          <div key={service.id} className="service-card">
            <div>
              <div className="service-title">{service.title}</div>
              <div className="service-price">{service.price} ₽</div>
            </div>
            <button onClick={() => addService(service)}>Добавить</button>
          </div>
        ))}
      </div>

      <div className="summary">
        <h2>Итого</h2>

        {selectedServices.length === 0 && (
          <div className="empty">Услуги не выбраны</div>
        )}

        <SelectedList selectedServices={selectedServices}/>

        <div className="total">
          <strong>Сумма:</strong>
          <strong>{totalPrice} ₽</strong>
        </div>

        <button
          className="checkout"
          disabled={selectedServices.length === 0}
        >
          Оформить заказ
        </button>
      </div>
    </div>
  );
}

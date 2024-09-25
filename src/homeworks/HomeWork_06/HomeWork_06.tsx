import "./styles.css";

interface Car {
    brand: string;
    price: number;
    isDiesel: boolean;
  }
  
  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porsche", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];
  
  const Homework_06 = () => {
    return (
      <div className="homework06-wrapper">
        <h1 className="page-title">Homework 06</h1>
        <div className="cards-container">
          {cars.map((car, index) => (
            <div className="card" key={index}>
              <h2 className="card-title">{car.brand}</h2>
              <p className="card-info">Price: ${car.price}</p>
              <p className="card-info">
                Fuel Type: {car.isDiesel ? "Diesel" : "Petrol"}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Homework_06;

import React, { FormEvent, useEffect, useState } from 'react';
import { GetOneProductForAdminRes } from 'types';
import { useParams } from 'react-router-dom';

export const AdminProductCardView = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [product, setProduct] = useState<GetOneProductForAdminRes>({
    name: '',
    description: '',
    url: '',
    price: 0,
    count: 0,
  });
  const { id } = useParams();

  const updateForm = (key: string, value: string | number) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [key]: value,
    }));
  };

  const refreshProduct = async () => {
    setProduct({
      name: '',
      description: '',
      url: '',
      price: 0,
      count: 0,
    });

    const res = await fetch(`http://localhost:3001/admin/card/${id}`);

    if ([400, 500].includes(res.status)) {
      const error = await res.json();
      setErrorMessage(error.message);
      return;
    }

    const data: GetOneProductForAdminRes = await res.json();
    setProduct(data);
  };

  const sendForm = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:3001/admin/card/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    if ([400, 500].includes(res.status)) {
      const error = await res.json();
      setErrorMessage(error.message);
      return;
    }

    const data: GetOneProductForAdminRes = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    refreshProduct();
  }, []);

  if (errorMessage) {
    return (
      <div>
        <p>
          <strong>{errorMessage}</strong>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={sendForm}>
      <h2>Add product</h2>
      <p>
        <label>
          Name: <br />
          <input
            type="text"
            value={product.name}
            required
            maxLength={35}
            onChange={(e) => updateForm('name', e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Description: <br />
          <textarea
            value={product.description}
            required
            maxLength={255}
            onChange={(e) => updateForm('description', e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Image URL:: <br />
          <textarea
            value={product.url}
            required
            maxLength={100}
            disabled
            onChange={(e) => updateForm('description', e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Price: <br />
          <input
            type="number"
            value={product.price}
            step={0.01}
            min={0}
            max={999999.99}
            onChange={(e) => updateForm('price', Number(e.target.value))}
          />
        </label>
      </p>
      <p>
        <label>
          Count: <br />
          <input
            type="number"
            value={product.count}
            min={0}
            max={9999}
            onChange={(e) => updateForm('count', Number(e.target.value))}
          />
        </label>
      </p>
      <button type="submit">Update product</button>
    </form>
  );
};

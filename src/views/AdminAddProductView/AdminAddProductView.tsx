import React, { FormEvent, useState } from 'react';
import { NewProductEntity, AddProductRes } from 'types';

export const AdminAddProductView = () => {
  const [form, setForm] = useState<NewProductEntity>({
    name: '',
    description: '',
    url: 'https://via.placeholder.com/',
    price: 0,
    count: 0,
  });
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [resultInfo, setResultInfo] = useState<string | null>(null);

  const updateForm = (key: string, value: string | number) => {
    setForm((prevForm) => ({
      ...prevForm,
      [key]: value,
    }));
  };

  const sendForm = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    const res = await fetch(`http://localhost:3001/admin/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if ([400, 500].includes(res.status)) {
      const error = await res.json();
      setErrorMessage(error.message);
      return;
    }

    const data: AddProductRes = await res.json();

    setResultInfo(`${data.name} added with ${data.id}.`);
    setForm({
      name: '',
      description: '',
      url: 'https://via.placeholder.com/',
      price: 0,
      count: 0,
    });

    setIsLoading(false);
  };

  if (resultInfo !== null && !isLoading) {
    return (
      <div>
        <p>
          <strong>{resultInfo}</strong>
        </p>
        <button type="button" onClick={() => setResultInfo(null)}>
          Add another one
        </button>
      </div>
    );
  }

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
            value={form.name}
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
            value={form.description}
            required
            maxLength={255}
            onChange={(e) => updateForm('description', e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Image URL: <br />
          <input
            type="text"
            value={form.url}
            required
            maxLength={100}
            disabled
            onChange={(e) => updateForm('name', e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Price: <br />
          <input
            type="number"
            value={form.price}
            required
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
            value={form.count}
            min={0}
            max={9999}
            onChange={(e) => updateForm('count', Number(e.target.value))}
          />
        </label>
      </p>
      <button type="submit">Add</button>
    </form>
  );
};

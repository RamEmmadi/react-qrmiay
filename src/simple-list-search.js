import React, { useState } from 'react';

export default function SimpleListSearch() {
  const persons = [
    {
      id: 1,
      name: 'Abhi',
      department: 'IT',
    },
    {
      id: 2,
      name: 'Karthik',
      department: 'IT Solutions',
    },
    {
      id: 3,
      name: 'Abhishek',
      department: 'IT Infra',
    },
    {
      id: 10,
      name: 'Shiva',
      department: 'IT',
    },
  ];

  const [personsState, setPersons] = useState(persons);

  const filterPersons = (e) => {
    let key = e.target.value;
    let fileteredPersons = persons.filter((item) => {
      if (item.name.includes(key) || item.department.includes(key)) return item;
    });
    setPersons(fileteredPersons);
  };
  const personList = personsState.map((person) => {
    return (
      <li>
        {person.name} - {person.department}
      </li>
    );
  });

  return (
    <div>
      <input onChange={filterPersons} />
      <ul>{personList}</ul>
    </div>
  );
}

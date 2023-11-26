import React from 'react';
import Sidebar from './Containers/Sidebar';
import Sobre from './Containers/Sobre';
import { Container } from './Container';
import Projetos from './Containers/Projetos';
import EstiloGlobal from './EstiloGlobal';

export function App() {
  return (
    <div>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </div>
  );
}

# 📄 README – Projeto YourEvent

## 📌 1. Introdução

O projeto **YourEvent** consiste no desenvolvimento de uma aplicação web voltada para o planejamento e gerenciamento de eventos. A proposta do sistema é oferecer uma interface simples e intuitiva para apresentação de serviços, agendamento de eventos, acesso à área do participante e validação de certificados.

O desenvolvimento foi realizado utilizando tecnologias front-end, com ênfase em **responsividade** e **acessibilidade**, buscando atender diferentes perfis de usuários e dispositivos.

---

## 🛠️ 2. Tecnologias Utilizadas

* **HTML5** – Estruturação do conteúdo
* **CSS3** – Estilização e layout
* **JavaScript** – Interatividade e lógica do sistema
* **Bootstrap** – Responsividade e componentes visuais
* **VLibras** – Acessibilidade para usuários surdos

---

## 📱 3. Responsividade

A responsividade do sistema foi implementada principalmente por meio do framework **Bootstrap**, aliado a algumas definições no CSS.

### 🔹 3.1 Evidências no Código

#### Meta viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

#### Grid responsivo

```html
<div class="col-md-4">
```

#### Navbar adaptável

```html
<button class="navbar-toggler" data-bs-toggle="collapse">
```

#### Classes utilitárias

* `container`
* `row`
* `col-md-*`
* `d-flex`
* `justify-content-center`

---

### 🔹 3.2 Estilização Complementar (CSS)

```css
.hero {
    min-height: 90vh;
    display: flex;
    align-items: center;
}
```

```css
.section {
    padding: 80px 0;
}
```

Essas definições ajudam a manter consistência visual em diferentes tamanhos de tela.

---

### 🔹 3.3 Comportamento Responsivo

* Layout baseado em colunas que se reorganizam automaticamente
* Menu de navegação que colapsa em dispositivos móveis
* Elementos centralizados com Flexbox
* Uso de imagens fluidas (`img-fluid`)

---

### ⚠️ 3.4 Análise Crítica

Apesar do uso eficiente do Bootstrap, há limitações importantes:

* Não foram identificadas **media queries personalizadas**
* Forte dependência do framework
* Pouco controle sobre breakpoints específicos
* Layout pode não estar otimizado para todos os tamanhos de tela

---

## ♿ 4. Acessibilidade

A acessibilidade é parcialmente contemplada no projeto, com destaque para a integração com o VLibras.

---

### 🔹 4.1 Integração com VLibras

```html
<script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
<script>new window.VLibras.Widget();</script>
```

Esse recurso permite traduzir o conteúdo da página para a **Língua Brasileira de Sinais (Libras)**, ampliando o acesso para pessoas surdas.

---

### 🔹 4.2 Pontos Positivos

* Inclusão de acessibilidade em Libras
* Layout organizado e legível
* Uso de contrastes visuais adequados
* Estrutura simples e intuitiva

---

### ⚠️ 4.3 Limitações de Acessibilidade

Com base nas diretrizes WCAG, foram identificadas as seguintes falhas:

#### ❌ Falta de semântica HTML

* Ausência de `<main>`, `<header>`, `<section>` estruturado semanticamente

#### ❌ Formulários inadequados

* Inputs sem `<label>`
* Dependência de `placeholder`

#### ❌ Imagens sem atributo `alt`

* Prejudica leitores de tela

#### ❌ Problemas de código

```html
< </head>
```

#### ❌ Tipo de input inválido

```html
<input type="login">
```

#### ❌ Feedback não acessível

* Uso de `alert()` no JavaScript

---

## ⚙️ 5. Funcionalidades do Sistema

### 🔹 Página Inicial

* Apresentação do serviço
* Etapas do processo
* Programação de eventos
* Formulário de agendamento

### 🔹 Área do Participante

* Sistema de login simples

### 🔹 Validação de Certificado

* Formulário para validação de dados

---

## 🎨 6. Experiência do Usuário

O projeto utiliza animações com **IntersectionObserver**:

```javascript
const observer = new IntersectionObserver(...)
```

### Efeitos aplicados:

* Fade-in de elementos
* Transição suave ao rolar a página

Isso melhora a percepção de fluidez e modernidade da interface.

---

## 🔐 7. Segurança

O sistema de autenticação é totalmente client-side:

```javascript
login: "jhonsilva",
senha: "1234@"
```

### ⚠️ Limitações:

* Dados expostos no código
* Sem criptografia
* Sem validação em servidor

Uso apenas didático.

---

## 🎯 8. Considerações Finais

O projeto demonstra domínio de conceitos básicos de desenvolvimento web, com uso eficiente de frameworks e integração de recursos de acessibilidade.

Entretanto, para evolução do sistema, recomenda-se:

* Implementar **semântica HTML adequada**
* Melhorar acessibilidade conforme WCAG
* Adicionar **media queries personalizadas**
* Corrigir erros de sintaxe
* Implementar backend para autenticação segura

---

## 📚 9. Referências

* W3C – Web Content Accessibility Guidelines (WCAG)
* Documentação Bootstrap
* VLibras – Governo Federal

---

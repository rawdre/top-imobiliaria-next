# Quickstart: Public Listings Flow

## Local Validation

1. Install dependencies if needed:

   ```powershell
   npm install
   ```

2. Run lint:

   ```powershell
   npm run lint
   ```

3. Run production build:

   ```powershell
   npm run build
   ```

4. Start the local app:

   ```powershell
   npm run dev
   ```

5. Open listing states:

   ```text
   http://localhost:3000/imoveis
   http://localhost:3000/imoveis?tipo=aluguel&ordem=recentes
   http://localhost:3000/imoveis?tipo=venda&pagina=2
   ```

## Expected Results

- `/imoveis` loads the public inventory flow.
- Active property cards render without buildings or condominium directory entries.
- Filter and sort selections update the URL.
- Reloading a filtered URL restores the same controls.
- Invalid query values recover to a usable default state.
- Empty and error states are visible and non-technical.

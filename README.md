# E2E Testing Project

This project is designed for end-to-end testing using Playwright. It includes various test configurations and scripts to automate testing processes.

## Setup

1. **Install Node.js**: 
   - Download and install Node.js from [nodejs.org](https://nodejs.org/).
   - Ensure you are using Node.js version 14 or higher. You can check your version by running:
     ```bash
     node -v
     ```

2. **Install Dependencies**: Run the following command to install the necessary dependencies:
   ```bash
   npm install
   ```

3. **Configure Environment**: Ensure that your environment is set up correctly, including any necessary environment variables or configuration files.

4. **Run Tests**: You can run the tests using the following command:
   ```bash
   npm run test
   ```

## Project Structure

- **`tests/`**: Contains all the test files and configurations.
- **`storageState/`**: Directory for storing state information during tests (ignored by Git).
- **`testFiles/`**: Directory for test-related files, including modified files (ignored by Git).

## Additional Information

- **Git Ignored Files**: The following directories are ignored by Git:
  - `node_modules/`
  - `test-results/`
  - `playwright-report/`
  - `blob-report/`
  - `playwright/.cache/`
  - `tests/test-config.local.ts`
  - `tests/config/auth.config.ts`
  - `storageState/`
  - `**/Modified/**`

## Customize Configuration

To customize the configuration for your tests, you can modify the `playwright.config.ts` file located in the root of your project. This file contains various settings that you can adjust to suit your testing needs, such as:

- **Test Match**: You can specify which files to include or exclude from testing.
- **Browser Options**: Configure the browsers and their settings.
- **Environment Variables**: Set up environment variables for your tests.

## Running Playwright UI

To run Playwright in UI mode, which provides a graphical interface for debugging and viewing test results, use the following command:

```bash
npx playwright test --ui
```

This will open the Playwright UI, allowing you to interact with your tests in a more user-friendly manner.

## Folder Structure and Configuration

### Folder Structure

- **`tests/specs/`**: Contains the test specifications and scripts.
- **`tests/config/`**: Contains configuration files for environment, account, and other parameters.
- **`tests/testFiles/`**: Contains test-related files, including modified files.

### Setting Up Environment and Account

1. **Environment Configuration**:
   - Navigate to the `tests/config/` directory.
   - Modify the `auth.config.ts` file to set up your environment variables and account credentials.

2. **Page Actions Parameters**:
   - In your test files, you can set parameters for page actions by modifying the relevant configuration files or directly in the test scripts.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 
import { Page, expect } from '@playwright/test';
import { baseConfig } from '../configs/index';
import { LoginPage } from '../pages/LoginPage';
import { SelectOrganizationPage } from '../pages/SelectOrganizationPage';
import { SelectDispatchCenterPage } from '../pages/SelectDispatchCenter';

export async function login(page: Page) {
  const loginPage = new LoginPage(page);
  const selectOrgPage = new SelectOrganizationPage(page);
  const selectDispatchCenterPage = new SelectDispatchCenterPage(page);
  
  // 前往登入頁面
  await page.goto(baseConfig.baseUrl);
  
  // 等待並檢查登入標題
  await loginPage.waitForHeading();
  
  // 執行登入
  await Promise.all([
    page.waitForURL('**/?ticket=*'),
    loginPage.login(baseConfig.credentials.account, baseConfig.credentials.password)
  ]);
  
  // 等待組織選擇頁面載入並驗證
  await selectOrgPage.waitForPage();
  expect(await selectOrgPage.isVisible()).toBeTruthy();
  
  // 驗證組織列表中包含目標組織
  const organizations = await selectOrgPage.getAllOrganizations();
  expect(organizations).toContain(baseConfig.organization.name);
  
  // 選擇組織並等待右下角組織名稱出現
  await selectOrgPage.selectOrganization(baseConfig.organization.name);
  
  // 等待右下角組織名稱出現並驗證
  const organizationText = page.locator(`p.MuiTypography-root:has-text("${baseConfig.organization.name}")`);
  await expect(organizationText).toBeVisible({ timeout: 5000 });
  await expect(organizationText).toHaveText(baseConfig.organization.name);  

  // 檢查並選擇 DC
  await selectDispatchCenterPage.selectDispatchCenterIfNeeded();
} 
/** 用户选择范围上的批量动作；永久删除由动作入口确认。 */
export function runCatalogBatch(operation: string, button: HTMLElement | null): Promise<unknown>;
export function runFollowBatch(action: string, button: HTMLElement | null): Promise<unknown>;
export function runJunkBatch(operation: string, button: HTMLElement | null): Promise<unknown>;

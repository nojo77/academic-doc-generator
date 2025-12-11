/**
 * Cloudflare Worker 入口点
 */
export default {
  /**
   * fetch 处理程序：处理传入的 HTTP 请求
   * @param {Request} request 传入的请求对象
   * @param {Object} env 环境变量绑定 (KV, D1, Secrets 等)
   * @param {Object} ctx 执行上下文 (用于 waitUntil 等)
   * @returns {Promise<Response>} 返回一个 Response 对象
   */
  async fetch(request, env, ctx) {
    // 简单的路由示例
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response("Hello World! Cloudflare Worker is running.", {
        status: 200,
        headers: { "content-type": "text/plain;charset=UTF-8" },
      });
    }

    if (url.pathname === "/json") {
      return Response.json({ message: "这是 JSON 响应", status: "ok" });
    }

    // 默认 404
    return new Response("Not Found", { status: 404 });
  },
};

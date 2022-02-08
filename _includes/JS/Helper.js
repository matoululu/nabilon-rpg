class Helper {
  sendResponse(content) {
    const responseEvent = new CustomEvent('text:response', {
      detail: {
        content
      },
      bubbles: true,
    });

    document.documentElement.dispatchEvent(responseEvent);
  }
}

import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { useSplash } from '../hooks/useSplash';

// Mock sessionStorage
const mockSessionStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  clear: vi.fn(),
};

Object.defineProperty(window, 'sessionStorage', {
  value: mockSessionStorage,
  writable: true,
});

// Mock performance.now
const mockPerformanceNow = vi.fn();
Object.defineProperty(window, 'performance', {
  value: { now: mockPerformanceNow },
  writable: true,
});

describe('useSplash', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockSessionStorage.getItem.mockReturnValue(null);
    mockPerformanceNow.mockReturnValue(1000);
  });

  afterEach(() => {
    vi.clearAllTimers();
  });

  it('should show splash when not previously shown', () => {
    mockSessionStorage.getItem.mockReturnValue(null);
    
    const { result } = renderHook(() =>
      useSplash({ appReady: false })
    );

    expect(result.current.isOpen).toBe(true);
    expect(result.current.seconds).toBe(3);
  });

  it('should not show splash when previously shown', () => {
    mockSessionStorage.getItem.mockReturnValue('1');
    
    const { result } = renderHook(() =>
      useSplash({ appReady: false })
    );

    expect(result.current.isOpen).toBe(false);
  });

  it('should always show splash with forceEveryVisit=true', () => {
    mockSessionStorage.getItem.mockReturnValue('1');
    
    const { result } = renderHook(() =>
      useSplash({ appReady: false, forceEveryVisit: true })
    );

    expect(result.current.isOpen).toBe(true);
  });

  it('should close splash when both conditions are met', async () => {
    mockSessionStorage.getItem.mockReturnValue(null);
    mockPerformanceNow.mockReturnValue(1000);
    
    const { result, rerender } = renderHook(
      ({ appReady }) => useSplash({ appReady, minDurationMs: 3000 }),
      { initialProps: { appReady: false } }
    );

    expect(result.current.isOpen).toBe(true);

    // Fast-forward time and set app ready
    mockPerformanceNow.mockReturnValue(4000);
    rerender({ appReady: true });

    // Wait for the effect to run
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
    });

    expect(result.current.isOpen).toBe(false);
    expect(mockSessionStorage.setItem).toHaveBeenCalledWith('ivedix_splash_shown', '1');
  });

  it('should not close before minimum duration', async () => {
    mockSessionStorage.getItem.mockReturnValue(null);
    mockPerformanceNow.mockReturnValue(1000);
    
    const { result, rerender } = renderHook(
      ({ appReady }) => useSplash({ appReady, minDurationMs: 3000 }),
      { initialProps: { appReady: false } }
    );

    expect(result.current.isOpen).toBe(true);

    // Set app ready but not enough time has passed
    mockPerformanceNow.mockReturnValue(2000);
    rerender({ appReady: true });

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
    });

    expect(result.current.isOpen).toBe(true);
  });

  it('should skip immediately and set session flag', () => {
    mockSessionStorage.getItem.mockReturnValue(null);
    
    const { result } = renderHook(() =>
      useSplash({ appReady: false })
    );

    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.skip();
    });

    expect(result.current.isOpen).toBe(false);
    expect(mockSessionStorage.setItem).toHaveBeenCalledWith('ivedix_splash_shown', '1');
  });

  it('should handle sessionStorage errors gracefully', () => {
    mockSessionStorage.getItem.mockImplementation(() => {
      throw new Error('Storage not available');
    });
    
    const { result } = renderHook(() =>
      useSplash({ appReady: false })
    );

    // Should still show splash even if sessionStorage fails
    expect(result.current.isOpen).toBe(true);
  });

  it('should countdown from 3 to 0', async () => {
    mockSessionStorage.getItem.mockReturnValue(null);
    
    const { result } = renderHook(() =>
      useSplash({ appReady: false })
    );

    expect(result.current.seconds).toBe(3);

    // Fast-forward 1 second
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 1100));
    });

    expect(result.current.seconds).toBe(2);

    // Fast-forward another second
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 1100));
    });

    expect(result.current.seconds).toBe(1);

    // Fast-forward final second
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 1100));
    });

    expect(result.current.seconds).toBe(0);
  });

  it('should clean up timers on unmount', () => {
    const clearIntervalSpy = vi.spyOn(global, 'clearInterval');
    const clearTimeoutSpy = vi.spyOn(global, 'clearTimeout');
    
    const { unmount } = renderHook(() =>
      useSplash({ appReady: false })
    );

    unmount();

    expect(clearIntervalSpy).toHaveBeenCalled();
    expect(clearTimeoutSpy).toHaveBeenCalled();
  });
});

import { AuthGuard } from './auth.guard';
import {createServiceFactory} from "@ngneat/spectator";
import {SpectatorService} from "@ngneat/spectator";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let spectator: SpectatorService<AuthGuard>

  let activatedRouteSnapshot = new ActivatedRouteSnapshot()
  let routerStateSnapshot: RouterStateSnapshot

  const createGuard = createServiceFactory({
    service: AuthGuard
  })

  beforeEach(() => {
    spectator = createGuard()
    guard = spectator.service
  });

  describe('canActivate', () => {
    it('returns false', () => {
      expect(guard.canActivate(activatedRouteSnapshot, routerStateSnapshot)).toBeFalsy()
    })
    it('returns true', () => {
      localStorage.setItem('key', 'testing-workshop')

      expect(guard.canActivate(activatedRouteSnapshot, routerStateSnapshot)).toBeTruthy()
    })
  })
});

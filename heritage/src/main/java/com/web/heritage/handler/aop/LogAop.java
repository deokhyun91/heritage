package com.web.heritage.handler.aop;

import java.util.HashMap;
import java.util.Map;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.CodeSignature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.util.StopWatch;

@Aspect
@Component

public class LogAop {
	private final Logger LOGGER = LoggerFactory.getLogger(LogAop.class);
	
	@Pointcut("execution(* com.web.heritage.web.controller..*.**(..))")
	private void pointCut() {}
	
	@Pointcut("@annotation(com.web.heritage.handler.aop.annotation.Log)")
	private void enalbleLog() {}	
	
	@Around("pointCut() &&enalbleLog()")
	public Object logging(ProceedingJoinPoint joinpoint) throws Throwable{
		Map<String, Object> params = getParams(joinpoint);
		StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		
		LOGGER.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
		LOGGER.info("1.Name : {}", joinpoint.getSignature().getDeclaringType());
		LOGGER.info("2.Method : {}",joinpoint.getSignature().getName());	
		LOGGER.info("3.Method Data : {}",params);
		
		Object result = joinpoint.proceed();		
		stopWatch.stop();
		
		LOGGER.info("4.Result : {}",result);
		LOGGER.info("5.Timer : {}ms",stopWatch.getTotalTimeSeconds());
		LOGGER.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");		
		return result;
	}
	
	public Map<String, Object> getParams(ProceedingJoinPoint joinPoint) throws Throwable{
		Map<String, Object> params = new HashMap<String, Object>();
		
		CodeSignature codeSignature = (CodeSignature) joinPoint.getSignature();
		String[] argNames = codeSignature.getParameterNames();
		Object[] args = joinPoint.getArgs();
		
		
		for(int i=0;i<argNames.length;i++) {
			params.put(argNames[i], args[i]);
		}
		
		return params;		
	}
}
